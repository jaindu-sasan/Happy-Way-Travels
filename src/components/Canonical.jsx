import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const SITE_URL = "https://www.happywaytravels.com"

export default function Canonical({ path }) {
  const location = useLocation()

  useEffect(() => {
    const canonicalPath = path ?? location.pathname
    const url = `${SITE_URL}${canonicalPath}`

    // Canonical tag
    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }
    link.setAttribute("href", url)

    // Optional: keep OG URL in sync too
    let og = document.querySelector("meta[property='og:url']")
    if (!og) {
      og = document.createElement("meta")
      og.setAttribute("property", "og:url")
      document.head.appendChild(og)
    }
    og.setAttribute("content", url)
  }, [location.pathname, path])

  return null
}
