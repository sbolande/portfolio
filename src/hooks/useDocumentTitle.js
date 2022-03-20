import { useEffect } from "react";

export default function useDocumentTitle(title = null) {
  const prepend = "Seth Bolander";

  useEffect(() => {
    document.title = title !== null ? `${prepend} | ${title}` : prepend;
  }, [title]);
}
