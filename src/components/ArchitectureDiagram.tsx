export type ArchitectureDiagramType =
  | 'agent-capital'
  | 'chatwoot'
  | 'punto-tierra'
  | 'carmen'

interface ArchitectureDiagramProps {
  type: ArchitectureDiagramType
  locale?: string
}

type Tone = 'ink' | 'blue' | 'ochre' | 'sage' | 'paper'

const tones: Record<Tone, { fill: string; stroke: string; text: string }> = {
  ink: { fill: '#17324d', stroke: '#17324d', text: '#ffffff' },
  blue: { fill: '#e7eff8', stroke: '#6b8cad', text: '#17324d' },
  ochre: { fill: '#f8e7d5', stroke: '#c17a4a', text: '#60361f' },
  sage: { fill: '#e7eee7', stroke: '#78907a', text: '#28402d' },
  paper: { fill: '#fffefa', stroke: '#b8b4aa', text: '#17324d' },
}

interface NodeProps {
  x: number
  y: number
  width?: number
  height?: number
  label: string
  detail?: string
  tone?: Tone
  step?: string
}

function Node({
  x,
  y,
  width = 150,
  height = 58,
  label,
  detail,
  tone = 'paper',
  step,
}: NodeProps) {
  const colors = tones[tone]
  const textX = x + (step ? 34 : 14)
  const labelY = detail ? y + 23 : y + height / 2 + 4

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="10"
        fill={colors.fill}
        stroke={colors.stroke}
        strokeWidth="1.25"
      />
      {step && (
        <>
          <circle cx={x + 17} cy={y + 20} r="9" fill={colors.stroke} />
          <text
            x={x + 17}
            y={y + 23.5}
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="700"
            fill="#ffffff"
          >
            {step}
          </text>
        </>
      )}
      <text
        x={textX}
        y={labelY}
        fontSize="12"
        fontWeight="700"
        letterSpacing="-0.15"
        fill={colors.text}
      >
        {label}
      </text>
      {detail && (
        <text x={x + 14} y={y + 42} fontSize="9.5" fill={colors.text} opacity="0.72">
          {detail}
        </text>
      )}
    </g>
  )
}

interface EdgeProps {
  d: string
  markerId: string
  dashed?: boolean
  muted?: boolean
}

function Edge({ d, markerId, dashed = false, muted = false }: EdgeProps) {
  return (
    <path
      d={d}
      fill="none"
      stroke={muted ? '#9b9a94' : '#496783'}
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dashed ? '5 5' : undefined}
      markerEnd={`url(#${markerId})`}
    />
  )
}

function LaneLabel({ x, y, children }: { x: number; y: number; children: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="#64717d"
      fontSize="9"
      fontWeight="700"
      letterSpacing="1.5"
    >
      {children.toUpperCase()}
    </text>
  )
}

function AgentCapitalDiagram({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <g>
      <LaneLabel x={34} y={83}>{es ? 'Datos comerciales y comisiones' : 'Commercial data and commissions'}</LaneLabel>

      <Node x={34} y={106} width={150} label="Zoho CRM" detail={es ? 'negocios y desarrollos' : 'deals and developers'} tone="blue" />
      <Node
        x={238}
        y={102}
        width={170}
        height={72}
        label={es ? 'Integración Zoho' : 'Zoho integration'}
        detail={es ? 'obtiene y normaliza' : 'retrieves and normalizes'}
        tone="ink"
      />
      <Node x={466} y={106} width={146} height={64} label="PostgreSQL" detail={es ? 'datos comerciales' : 'commercial data'} tone="sage" />
      <Node
        x={669}
        y={102}
        width={181}
        height={72}
        label={es ? 'Plataforma interna' : 'Internal platform'}
        detail={es ? 'visualización de Zoho' : 'Zoho visualization'}
        tone="ink"
      />

      <Edge d="M184 135 H238" markerId={markerId} />
      <Edge d="M408 138 H466" markerId={markerId} />
      <Edge d="M612 138 H669" markerId={markerId} />

      <Node x={238} y={218} width={170} height={54} label={es ? 'Vista comercial' : 'Commercial view'} detail={es ? 'solo datos de Zoho' : 'Zoho data only'} tone="paper" />
      <Node x={466} y={218} width={164} height={54} label={es ? 'Comisiones internas' : 'Internal commissions'} tone="ochre" />
      <Node x={688} y={218} width={162} height={54} label={es ? 'Cobro a desarrolladores' : 'Developer receivables'} tone="ochre" />
      <Edge d="M759 174 V194 H323 V218" markerId={markerId} muted />
      <Edge d="M759 194 H548 V218" markerId={markerId} muted />
      <Edge d="M759 194 V218" markerId={markerId} muted />

      <LaneLabel x={34} y={322}>{es ? 'Consulta de conocimiento' : 'Knowledge retrieval'}</LaneLabel>
      <Node x={34} y={340} width={142} label={es ? 'Base documental' : 'Knowledge base'} tone="paper" />
      <Node x={210} y={340} width={142} label={es ? 'Procesamiento' : 'Processing'} tone="paper" />
      <Node x={386} y={340} width={142} label="Pinecone" detail={es ? 'índice vectorial' : 'vector index'} tone="sage" />
      <Node x={562} y={340} width={142} label="Agente RAG" detail={es ? 'recupera contexto' : 'retrieves context'} tone="ochre" />
      <Node x={738} y={340} width={112} label={es ? 'Consultas' : 'Queries'} tone="blue" />
      <Edge d="M176 369 H210" markerId={markerId} />
      <Edge d="M352 369 H386" markerId={markerId} />
      <Edge d="M528 369 H562" markerId={markerId} />
      <Edge d="M704 369 H738" markerId={markerId} />
    </g>
  )
}

function ChatwootDiagram({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <g>
      <rect x="25" y="78" width="254" height="338" rx="16" fill="#f1f0eb" stroke="#aaa79f" strokeWidth="1.25" strokeDasharray="6 5" />
      <rect x="305" y="78" width="570" height="338" rx="16" fill="#fffefa" stroke="#c17a4a" strokeWidth="1.25" />
      <LaneLabel x={43} y={104}>{es ? 'Base acreditada · Chatwoot 4.x' : 'Credited base · Chatwoot 4.x'}</LaneLabel>
      <LaneLabel x={325} y={104}>{es ? 'Extensiones diseñadas e implementadas' : 'Designed and implemented extensions'}</LaneLabel>

      <Node x={49} y={130} width={206} label={es ? 'Bandeja y contactos' : 'Inbox and contacts'} detail={es ? 'experiencia base' : 'base experience'} tone="paper" />
      <Node x={49} y={224} width={206} label="Rails + PostgreSQL" detail={es ? 'núcleo de la plataforma' : 'platform core'} tone="paper" />
      <Node x={49} y={318} width={206} label={es ? 'Agentes y conversaciones' : 'Agents and conversations'} detail={es ? 'modelo operativo' : 'operational model'} tone="paper" />
      <Edge d="M152 188 V224" markerId={markerId} muted />
      <Edge d="M152 282 V318" markerId={markerId} muted />

      <Node x={328} y={130} width={150} label="Aircall" detail="webhook" tone="blue" step="1" />
      <Node x={503} y={130} width={150} label="Sidekiq + Redis" detail={es ? 'trabajos resilientes' : 'resilient jobs'} tone="blue" step="2" />
      <Node x={678} y={130} width={170} label={es ? 'Transcripción' : 'Transcription'} detail={es ? 'audio y fallback' : 'audio and fallback'} tone="blue" step="3" />
      <Edge d="M478 159 H503" markerId={markerId} />
      <Edge d="M653 159 H678" markerId={markerId} />

      <Node x={328} y={250} width={150} label={es ? 'Métricas' : 'Metrics'} detail={es ? 'reglas deterministas' : 'deterministic rules'} tone="ochre" step="4" />
      <Node x={503} y={250} width={150} label="LLM" detail={es ? 'análisis de llamada' : 'call analysis'} tone="ochre" step="5" />
      <Node x={678} y={250} width={170} label="Scorecards" detail="Revenue Intelligence" tone="ochre" step="6" />
      <Edge d="M763 188 V218 H403 V250" markerId={markerId} />
      <Edge d="M478 279 H503" markerId={markerId} />
      <Edge d="M653 279 H678" markerId={markerId} />

      <Node x={503} y={344} width={150} height={48} label="Zoho CRM" tone="sage" step="7" />
      <Edge d="M763 308 V328 H578 V344" markerId={markerId} />
      <Edge d="M503 368 H279" markerId={markerId} dashed muted />
      <Edge d="M279 253 H305" markerId={markerId} dashed muted />
    </g>
  )
}

function PuntoTierraDiagram({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <g>
      <LaneLabel x={34} y={88}>{es ? 'Experiencia y captación' : 'Experience and acquisition'}</LaneLabel>
      <Node x={34} y={112} width={125} label={es ? 'Visitante' : 'Visitor'} tone="paper" />
      <Node x={201} y={106} width={150} height={64} label="Next.js" detail={es ? 'App Router' : 'App Router'} tone="ink" />
      <Node x={393} y={106} width={150} height={64} label={es ? 'Catálogo' : 'Catalog'} detail={es ? 'propiedades' : 'properties'} tone="blue" />
      <Node x={585} y={106} width={160} height={64} label={es ? 'Ficha y galería' : 'Detail and gallery'} detail={es ? 'interacción' : 'interaction'} tone="blue" />
      <Edge d="M159 141 H201" markerId={markerId} />
      <Edge d="M351 138 H393" markerId={markerId} />
      <Edge d="M543 138 H585" markerId={markerId} />

      <Node x={585} y={204} width={160} label="Server Action" detail={es ? 'captura el lead' : 'captures the lead'} tone="ochre" />
      <Node x={777} y={204} width={110} label="Zoho CRM" tone="sage" />
      <Edge d="M665 170 V204" markerId={markerId} />
      <Edge d="M745 233 H777" markerId={markerId} />

      <LaneLabel x={34} y={279}>{es ? 'Medición con deduplicación' : 'Measurement with deduplication'}</LaneLabel>
      <Node x={201} y={298} width={150} label="Meta Pixel" detail={es ? 'evento del navegador' : 'browser event'} tone="paper" />
      <Node x={393} y={298} width={150} label="Meta CAPI" detail={es ? 'evento del servidor' : 'server event'} tone="paper" />
      <Node x={585} y={298} width={160} label="Event ID" detail={es ? 'deduplicación' : 'deduplication'} tone="ochre" />
      <Edge d="M96 170 V327 H201" markerId={markerId} muted />
      <Edge d="M665 262 V279 H468 V298" markerId={markerId} muted />
      <Edge d="M351 327 H585" markerId={markerId} />
      <Edge d="M543 327 H585" markerId={markerId} />

      <Node x={201} y={388} width={150} height={45} label="SEO + JSON-LD" tone="sage" />
      <Node x={393} y={388} width={150} height={45} label={es ? 'Buscadores' : 'Search engines'} tone="paper" />
      <Edge d="M276 170 V388" markerId={markerId} dashed muted />
      <Edge d="M351 410 H393" markerId={markerId} />
    </g>
  )
}

function CarmenDiagram({ es, markerId }: { es: boolean; markerId: string }) {
  return (
    <g>
      <LaneLabel x={34} y={88}>{es ? 'Canales' : 'Channels'}</LaneLabel>
      <Node x={34} y={112} width={150} label={es ? 'Cliente' : 'Customer'} detail={es ? 'catálogo web' : 'web catalog'} tone="paper" />
      <Node x={34} y={216} width={150} label={es ? 'Equipo de tienda' : 'Store staff'} detail={es ? 'panel operativo' : 'operations panel'} tone="paper" />
      <Node x={232} y={159} width={170} height={76} label="Django" detail={es ? 'dominio y servicios' : 'domain and services'} tone="ink" />
      <Edge d="M184 141 H207 V182 H232" markerId={markerId} />
      <Edge d="M184 245 H207 V212 H232" markerId={markerId} />

      <LaneLabel x={451} y={88}>{es ? 'Operación' : 'Operations'}</LaneLabel>
      <Node x={451} y={112} width={150} label="POS" detail={es ? 'pagos mixtos' : 'split payments'} tone="blue" />
      <Node x={635} y={112} width={174} label={es ? 'Inventario' : 'Inventory'} detail={es ? 'multisucursal' : 'multi-location'} tone="blue" />
      <Node x={451} y={216} width={150} label={es ? 'Caja' : 'Cash register'} detail={es ? 'cierres y movimientos' : 'closing and movements'} tone="ochre" />
      <Node x={635} y={216} width={174} label="CMS" detail={es ? 'contenido del sitio' : 'site content'} tone="ochre" />
      <Edge d="M402 177 H427 V141 H451" markerId={markerId} />
      <Edge d="M402 187 H610 V141 H635" markerId={markerId} />
      <Edge d="M402 207 H427 V245 H451" markerId={markerId} />
      <Edge d="M402 217 H610 V245 H635" markerId={markerId} />

      <Node x={344} y={341} width={192} height={68} label="PostgreSQL" detail={es ? 'transacciones y persistencia' : 'transactions and persistence'} tone="sage" />
      <Node x={635} y={341} width={174} height={68} label={es ? 'Reportes operativos' : 'Operational reports'} detail={es ? 'ventas e inventario' : 'sales and inventory'} tone="paper" />
      <Edge d="M526 170 V318 H440 V341" markerId={markerId} muted />
      <Edge d="M722 170 V318 H440 V341" markerId={markerId} muted />
      <Edge d="M526 274 V341" markerId={markerId} muted />
      <Edge d="M722 274 V318 H440 V341" markerId={markerId} muted />
      <Edge d="M536 375 H635" markerId={markerId} />
    </g>
  )
}

const diagramCopy = {
  'agent-capital': {
    es: {
      title: 'Agente Capital · mapa del sistema',
      description:
        'Zoho CRM alimenta la visualización comercial, las comisiones internas y las cuentas por cobrar a desarrolladores. Una base documental independiente alimenta el agente RAG.',
    },
    en: {
      title: 'Agente Capital · system map',
      description:
        'Zoho CRM feeds commercial visualization, internal commissions, and developer receivables. A separate knowledge base powers the RAG agent.',
    },
  },
  chatwoot: {
    es: {
      title: 'Chatwoot Capital Plus · mapa del sistema',
      description:
        'El diagrama separa la base acreditada de Chatwoot 4.x de las extensiones propias: Aircall, trabajos Sidekiq, transcripción, métricas, análisis con LLM, scorecards y Zoho CRM.',
    },
    en: {
      title: 'Chatwoot Capital Plus · system map',
      description:
        'The diagram separates the credited Chatwoot 4.x base from custom extensions: Aircall, Sidekiq jobs, transcription, metrics, LLM analysis, scorecards, and Zoho CRM.',
    },
  },
  'punto-tierra': {
    es: {
      title: 'Punto Tierra · mapa del sistema',
      description:
        'Una aplicación Next.js conecta catálogo y fichas de propiedades con Zoho CRM, medición mediante Meta Pixel y CAPI, deduplicación y SEO estructurado.',
    },
    en: {
      title: 'Punto Tierra · system map',
      description:
        'A Next.js application connects property catalog and details to Zoho CRM, Meta Pixel and CAPI measurement, deduplication, and structured SEO.',
    },
  },
  carmen: {
    es: {
      title: 'Carmen Cárdena Boutique · mapa del sistema',
      description:
        'Una aplicación Django articula catálogo, panel operativo, punto de venta, inventario, caja, CMS, PostgreSQL y reportes.',
    },
    en: {
      title: 'Carmen Cárdena Boutique · system map',
      description:
        'A Django application connects the catalog, operations panel, point of sale, inventory, cash register, CMS, PostgreSQL, and reporting.',
    },
  },
} satisfies Record<ArchitectureDiagramType, Record<'es' | 'en', { title: string; description: string }>>

export default function ArchitectureDiagram({ type, locale = 'es' }: ArchitectureDiagramProps) {
  const es = !locale.toLowerCase().startsWith('en')
  const language = es ? 'es' : 'en'
  const copy = diagramCopy[type][language]
  const markerId = `architecture-arrow-${type}`

  return (
    <figure className="overflow-hidden rounded-[1.5rem] border border-[#d8d4c9] bg-[#fbfaf6] p-3 sm:p-5">
      <div
        className="overflow-x-auto rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#315f87]"
        tabIndex={0}
        aria-label={es ? 'Diagrama desplazable horizontalmente' : 'Horizontally scrollable diagram'}
      >
        <svg
          viewBox="0 0 910 455"
          role="img"
          aria-label={copy.title}
          className="h-auto min-w-[680px] max-w-none bg-[#fbfaf6] sm:min-w-0 sm:w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{copy.title}</title>
          <desc>{copy.description}</desc>
          <defs>
            <marker
              id={markerId}
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0 0 L8 4 L0 8 Z" fill="#496783" />
            </marker>
          </defs>

          <text x="28" y="36" fill="#17324d" fontSize="16" fontWeight="750" letterSpacing="-0.25">
            {copy.title}
          </text>
          <text x="882" y="35" textAnchor="end" fill="#7c756b" fontSize="9" fontWeight="700" letterSpacing="1.5">
            SYSTEM MAP
          </text>
          <line x1="28" y1="56" x2="882" y2="56" stroke="#d8d4c9" />

          {type === 'agent-capital' && <AgentCapitalDiagram es={es} markerId={markerId} />}
          {type === 'chatwoot' && <ChatwootDiagram es={es} markerId={markerId} />}
          {type === 'punto-tierra' && <PuntoTierraDiagram es={es} markerId={markerId} />}
          {type === 'carmen' && <CarmenDiagram es={es} markerId={markerId} />}
        </svg>
      </div>
      <p className="diagram-scroll-hint">
        {es ? 'Desliza para explorar' : 'Swipe to explore'} <span aria-hidden="true">→</span>
      </p>
      <figcaption className="sr-only">{copy.description}</figcaption>
    </figure>
  )
}
