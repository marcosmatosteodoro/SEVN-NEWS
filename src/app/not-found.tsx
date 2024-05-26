import { PageContent } from '@/components'
import { PageError } from '@/components/PageError'

export default function NotFound() {
  return (
    <PageContent backButton>
      <PageError
        title="Página não encontrada"
        text="Não foi possível encontrar o recurso solicitado"
      />
    </PageContent>
  )
}