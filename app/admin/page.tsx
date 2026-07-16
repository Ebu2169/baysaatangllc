"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Loader2, LogOut, RefreshCw, Trash2, Inbox } from "lucide-react";
import type { QuoteSubmission } from "@/lib/supabase";

const statusMeta: Record<string, { label: string; className: string }> = {
  new: { label: "Шинэ", className: "bg-green-100 text-green-700" },
  contacted: { label: "Холбогдсон", className: "bg-yellow-100 text-yellow-700" },
  done: { label: "Дууссан", className: "bg-gray-200 text-gray-600" },
};

const statusOrder = ["new", "contacted", "done"];

function formatDate(value: string) {
  try {
    return new Date(value).toLocaleString("mn-MN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return value;
  }
}

export default function AdminPage() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const [submissions, setSubmissions] = useState<QuoteSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const loadSubmissions = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      const res = await fetch("/api/submissions", { cache: "no-store" });
      if (res.status === 401) {
        setAuthenticated(false);
        return;
      }
      if (!res.ok) throw new Error("Мэдээлэл ачаалахад алдаа гарлаа.");
      const data = await res.json();
      setSubmissions(data.submissions ?? []);
    } catch (err) {
      setLoadError(err instanceof Error ? err.message : "Алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/admin/session", { cache: "no-store" });
        const data = await res.json();
        setAuthenticated(Boolean(data.authenticated));
      } catch {
        setAuthenticated(false);
      } finally {
        setCheckingSession(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (authenticated) loadSubmissions();
  }, [authenticated, loadSubmissions]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Нэвтрэхэд алдаа гарлаа.");
      }
      setPassword("");
      setAuthenticated(true);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Нэвтрэхэд алдаа гарлаа.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setSubmissions([]);
  };

  const updateStatus = async (id: string, status: string) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
    const res = await fetch(`/api/submissions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!res.ok) loadSubmissions();
  };

  const deleteSubmission = async (id: string) => {
    if (!confirm("Энэ хүсэлтийг устгах уу?")) return;
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    const res = await fetch(`/api/submissions/${id}`, { method: "DELETE" });
    if (!res.ok) loadSubmissions();
  };

  const counts = useMemo(() => {
    return submissions.reduce<Record<string, number>>(
      (acc, s) => {
        acc.all += 1;
        acc[s.status] = (acc[s.status] ?? 0) + 1;
        return acc;
      },
      { all: 0 }
    );
  }, [submissions]);

  const visible = useMemo(
    () => (filter === "all" ? submissions : submissions.filter((s) => s.status === filter)),
    [submissions, filter]
  );

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-6 h-6 animate-spin text-green-600" />
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8"
        >
          <h1 className="text-2xl font-bold mb-1">Админ нэвтрэх</h1>
          <p className="text-sm text-gray-500 mb-6">Баясаа Танг ХХК</p>
          <input
            type="password"
            placeholder="Нууц үг"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all mb-4"
          />
          {loginError && <p className="text-sm text-red-600 mb-4">{loginError}</p>}
          <button
            type="submit"
            disabled={loggingIn}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-60"
          >
            {loggingIn ? "Нэвтэрч байна..." : "Нэвтрэх"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Үнийн саналын хүсэлтүүд</h1>
            <p className="text-sm text-gray-500">Баясаа Танг ХХК — админ самбар</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={loadSubmissions}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Шинэчлэх
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 text-sm hover:bg-gray-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Гарах
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {(["all", ...statusOrder] as const).map((key) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === key
                  ? "bg-green-600 text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {key === "all" ? "Бүгд" : statusMeta[key].label}
              <span className="ml-1.5 opacity-70">{counts[key] ?? 0}</span>
            </button>
          ))}
        </div>

        {loadError && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
            {loadError}
          </div>
        )}

        {loading && submissions.length === 0 ? (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        ) : visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <Inbox className="w-10 h-10 mb-3" />
            <p>Одоогоор хүсэлт алга байна.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {visible.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-bold text-lg">{s.full_name}</h3>
                      <span
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                          statusMeta[s.status]?.className ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {statusMeta[s.status]?.label ?? s.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 mt-0.5">{formatDate(s.created_at)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <select
                      value={s.status}
                      onChange={(e) => updateStatus(s.id, e.target.value)}
                      className="text-sm border border-gray-300 rounded-lg px-2 py-1.5 outline-none focus:border-green-500"
                    >
                      {statusOrder.map((st) => (
                        <option key={st} value={st}>
                          {statusMeta[st].label}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => deleteSubmission(s.id)}
                      className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      aria-label="Устгах"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div>
                    <span className="text-gray-400">Утас: </span>
                    <a href={`tel:${s.phone}`} className="text-green-600 hover:underline">
                      {s.phone}
                    </a>
                  </div>
                  {s.email && (
                    <div>
                      <span className="text-gray-400">И-мэйл: </span>
                      <a href={`mailto:${s.email}`} className="text-green-600 hover:underline">
                        {s.email}
                      </a>
                    </div>
                  )}
                  {s.company_name && (
                    <div>
                      <span className="text-gray-400">Байгууллага: </span>
                      <span className="text-gray-700">{s.company_name}</span>
                    </div>
                  )}
                  {s.product_name && (
                    <div>
                      <span className="text-gray-400">Бүтээгдэхүүн: </span>
                      <span className="text-gray-700">{s.product_name}</span>
                    </div>
                  )}
                </div>

                {s.message && (
                  <p className="mt-3 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                    {s.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
