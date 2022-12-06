export default function ({ route, redirect }) {
  // If the user is not authenticated
  if (route.fullPath.includes('/api/v4')) {
    return redirect('/tv')
  }
}
