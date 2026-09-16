import { useCallback, useState } from "react";

export type SubmitStatus = "idle" | "submitting" | "success";

/**
 * Local-only submit lifecycle (idle -> submitting -> success) for forms that
 * aren't wired to a backend yet (Contact, Apply, Careers, newsletter
 * signup — see README). TODO: once an endpoint exists, replace the
 * simulated delay below with the real request and drive `status` off its
 * result instead.
 */
export function useMockSubmit(onSuccess?: () => void) {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const submit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("submitting");
      window.setTimeout(() => {
        setStatus("success");
        onSuccess?.();
      }, 600);
    },
    [onSuccess],
  );

  const reset = useCallback(() => setStatus("idle"), []);

  return { status, submit, reset };
}
