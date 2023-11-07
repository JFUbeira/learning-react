import Link from 'next/link'

export default function Home() {
    return (
        <main className="p-4">
            <h1 className="font-bold text-2xl text-slate-900">
                Learning React
            </h1>

            <div className="mt-2">
                <Link href="/ejercicios/1" className="text-blue-900 underline">
                    Ejercicio 1
                </Link>
            </div>
        </main>
    )
}
