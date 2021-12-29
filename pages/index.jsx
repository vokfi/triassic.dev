import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'

export default function IndexPage() {
  return (
    <>
      <div className="bg-slate-900 w-screen h-screen">
        <div className="grid place-items-center h-screen">
          <p className="font-bold text-slate-600 text-8xl">
            <FontAwesomeIcon icon={faCookieBite} size="1x" spin />
          </p>
          <p className="font-bold text-slate-300 text-2xl">The website is coming soon, I am working on it!</p>
          <p className="italic text-slate-500 text-md">~ Meanwhile, enjoy the endless spinning cookie.</p>
        </div>
      </div>
    </>
  )
}
