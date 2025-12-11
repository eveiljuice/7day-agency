'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type Package = {
  key: string
  title: string
  price: string
} | null

type PackageContextType = {
  selectedPackage: Package
  setSelectedPackage: (pkg: Package) => void
}

const PackageContext = createContext<PackageContextType | undefined>(undefined)

export function PackageProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackage] = useState<Package>(null)

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  )
}

export function usePackage() {
  const context = useContext(PackageContext)
  if (context === undefined) {
    throw new Error('usePackage must be used within a PackageProvider')
  }
  return context
}




