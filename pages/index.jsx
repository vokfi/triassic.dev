import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import DefaultHead from '../components/_defaulthead.jsx'

export default function IndexPage() {
  return (
  <>
   <DefaultHead />
    <body className="bg-slate-900 h-screen">
      <main>
        <div className="grid place-items-center h-screen">
          <p className="font-bold text-slate-600 text-8xl">
            <FontAwesomeIcon icon={faPaintBrush} size="1x" />
          </p>
          <p className="font-bold text-slate-300 text-2xl">Triassic is currently painting the website...</p>
        </div>
      </main>
    </body>
  </>
  )
}
