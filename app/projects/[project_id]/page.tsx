import { ProjectDetails } from './project-details'

export default async function Page({
  params,
}: {
  params: Promise<{ project_id: string }>
}) {
  const { project_id } = await params

  return <ProjectDetails projectId={project_id} />
}
