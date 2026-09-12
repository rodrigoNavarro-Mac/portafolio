export type MiniSystemDiagramType =
  | 'ebenezer'
  | 'sedico'
  | 'danjvic'
  | 'sanmarco'
  | 'flights'
  | 'analyzer'

interface MiniSystemDiagramProps {
  type: MiniSystemDiagramType
  locale?: string
}

interface MiniNodeProps {
  x: number
  y: number
  width: number
  label: string
  tone?: 'light' | 'blue' | 'orange'
}

function MiniNode({ x, y, width, label, tone = 'light' }: MiniNodeProps) {
  return (
    <g className={`mini-node mini-node-${tone}`}>
      <rect x={x} y={y} width={width} height="40" rx="5" />
      <text x={x + width / 2} y={y + 24} textAnchor="middle">
        {label}
      </text>
    </g>
  )
}

function Arrow({ d, markerId }: { d: string; markerId: string }) {
  return <path className="mini-arrow" d={d} markerEnd={`url(#${markerId})`} />
}

function Ebenezer({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <>
      <MiniNode x={18} y={30} width={92} label={es ? 'Paciente' : 'Patient'} />
      <MiniNode x={134} y={30} width={92} label={es ? 'Servicios' : 'Services'} tone="blue" />
      <MiniNode x={250} y={30} width={92} label={es ? 'Cita' : 'Booking'} tone="orange" />
      <Arrow d="M110 50H134" markerId={markerId} />
      <Arrow d="M226 50H250" markerId={markerId} />
      <MiniNode x={76} y={104} width={96} label={es ? 'Sucursales' : 'Branches'} />
      <MiniNode x={196} y={104} width={96} label={es ? 'Contacto' : 'Contact'} tone="blue" />
      <Arrow d="M296 70V84H124V104" markerId={markerId} />
      <Arrow d="M172 124H196" markerId={markerId} />
    </>
  )
}

function Sedico({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <>
      <MiniNode x={18} y={30} width={86} label={es ? 'Industria' : 'Industry'} />
      <MiniNode x={128} y={30} width={104} label={es ? 'Catálogo PET' : 'PET catalog'} tone="blue" />
      <MiniNode x={256} y={30} width={86} label={es ? 'Contacto' : 'Contact'} tone="orange" />
      <Arrow d="M104 50H128" markerId={markerId} />
      <Arrow d="M232 50H256" markerId={markerId} />
      <MiniNode x={72} y={104} width={104} label={es ? 'Capacidades' : 'Capabilities'} />
      <MiniNode x={200} y={104} width={104} label={es ? 'Cotización' : 'Quote'} tone="blue" />
      <Arrow d="M299 70V86H124V104" markerId={markerId} />
      <Arrow d="M176 124H200" markerId={markerId} />
    </>
  )
}

function Danjvic({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <>
      <MiniNode x={18} y={30} width={94} label={es ? 'Búsqueda' : 'Search'} />
      <MiniNode x={136} y={30} width={94} label={es ? 'Servicio' : 'Service'} tone="blue" />
      <MiniNode x={254} y={30} width={88} label={es ? 'Llamada' : 'Call'} tone="orange" />
      <Arrow d="M112 50H136" markerId={markerId} />
      <Arrow d="M230 50H254" markerId={markerId} />
      <MiniNode x={76} y={104} width={98} label={es ? 'Cobertura' : 'Coverage'} />
      <MiniNode x={198} y={104} width={98} label="24 / 7" tone="blue" />
      <Arrow d="M183 70V86H125V104" markerId={markerId} />
      <Arrow d="M174 124H198" markerId={markerId} />
    </>
  )
}

function SanMarco({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <>
      <MiniNode x={18} y={30} width={86} label={es ? 'Visita' : 'Visit'} />
      <MiniNode x={128} y={30} width={104} label={es ? 'Menú' : 'Menu'} tone="blue" />
      <MiniNode x={256} y={30} width={86} label={es ? 'Reserva' : 'Booking'} tone="orange" />
      <Arrow d="M104 50H128" markerId={markerId} />
      <Arrow d="M232 50H256" markerId={markerId} />
      <MiniNode x={72} y={104} width={104} label={es ? 'Eventos' : 'Events'} />
      <MiniNode x={200} y={104} width={104} label="SEO · JSON-LD" tone="blue" />
      <Arrow d="M180 70V86H124V104" markerId={markerId} />
      <Arrow d="M176 124H200" markerId={markerId} />
    </>
  )
}

function Flights({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <>
      <MiniNode x={18} y={30} width={84} label={es ? 'Ruta' : 'Route'} />
      <MiniNode x={126} y={30} width={106} label={es ? 'Distancia' : 'Distance'} tone="blue" />
      <MiniNode x={256} y={30} width={86} label={es ? 'Tarifa' : 'Fare'} tone="orange" />
      <Arrow d="M102 50H126" markerId={markerId} />
      <Arrow d="M232 50H256" markerId={markerId} />
      <MiniNode x={72} y={104} width={104} label={es ? 'Asientos' : 'Seats'} />
      <MiniNode x={200} y={104} width={104} label={es ? 'Resumen' : 'Summary'} tone="blue" />
      <Arrow d="M299 70V86H124V104" markerId={markerId} />
      <Arrow d="M176 124H200" markerId={markerId} />
    </>
  )
}

function Analyzer({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <>
      <MiniNode x={18} y={30} width={86} label="JS file" />
      <MiniNode x={128} y={30} width={104} label={es ? 'Analizador' : 'Analyzer'} tone="blue" />
      <MiniNode x={256} y={30} width={86} label={es ? 'Métricas' : 'Metrics'} tone="orange" />
      <Arrow d="M104 50H128" markerId={markerId} />
      <Arrow d="M232 50H256" markerId={markerId} />
      <MiniNode x={72} y={104} width={104} label={es ? 'Clases' : 'Classes'} />
      <MiniNode x={200} y={104} width={104} label="JSON" tone="blue" />
      <Arrow d="M299 70V86H124V104" markerId={markerId} />
      <Arrow d="M176 124H200" markerId={markerId} />
    </>
  )
}

const titles: Record<MiniSystemDiagramType, { es: string; en: string }> = {
  ebenezer: { es: 'Flujo del sitio de Ebenezer', en: 'Ebenezer website flow' },
  sedico: { es: 'Flujo comercial de Grupo Sedico', en: 'Grupo Sedico commercial flow' },
  danjvic: { es: 'Flujo de captación de DanJVic', en: 'DanJVic acquisition flow' },
  sanmarco: { es: 'Flujo del sitio de San Marco', en: 'San Marco website flow' },
  flights: { es: 'Flujo del prototipo de vuelos', en: 'Flight prototype flow' },
  analyzer: { es: 'Flujo del analizador de código', en: 'Code analyzer flow' },
}

export default function MiniSystemDiagram({ type, locale = 'es' }: MiniSystemDiagramProps) {
  const es = !locale.toLowerCase().startsWith('en')
  const markerId = `mini-arrow-${type}`
  const title = titles[type][es ? 'es' : 'en']

  return (
    <svg className="mini-system-diagram" viewBox="0 0 360 164" role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <marker id={markerId} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M0 0L8 4L0 8Z" />
        </marker>
      </defs>
      {type === 'ebenezer' && <Ebenezer es={es} markerId={markerId} />}
      {type === 'sedico' && <Sedico es={es} markerId={markerId} />}
      {type === 'danjvic' && <Danjvic es={es} markerId={markerId} />}
      {type === 'sanmarco' && <SanMarco es={es} markerId={markerId} />}
      {type === 'flights' && <Flights es={es} markerId={markerId} />}
      {type === 'analyzer' && <Analyzer es={es} markerId={markerId} />}
    </svg>
  )
}
