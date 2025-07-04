import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CodeSection = ({
  title,
  code,
  isLoading,
  currentLanguage
}: {
  title: string
  code: React.ReactNode
  isLoading: boolean
  currentLanguage: string
}) => (
  <div className="space-y-2">
    <h2 className="text-[13px] font-medium text-white tracking-wide">{title}</h2>
    {isLoading ? (
      <div className="space-y-1.5">
        <div className="mt-4 flex">
          <p className="text-xs bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 bg-clip-text text-transparent animate-pulse">
            Loading solution...
          </p>
        </div>
      </div>
    ) : (
      <div className="w-full">
        <SyntaxHighlighter
          language={currentLanguage === 'golang' ? 'go' : currentLanguage}
          style={dracula}
          showLineNumbers
          customStyle={{
            maxWidth: '100%',
            margin: '0',
            padding: '1rem',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all',
            backgroundColor: 'rgba(22, 27, 34, 0.5)'
          }}
          wrapLongLines={true}
        >
          {code as string}
        </SyntaxHighlighter>
      </div>
    )}
  </div>
)