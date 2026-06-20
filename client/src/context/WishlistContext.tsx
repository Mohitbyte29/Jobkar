import React, { type ReactNode } from 'react'

type Job = any;

type WishListContextType = {
  wishList: Job[]
  addToWishList: (job: Job) => void
  removeFromWishList: (jobId: number) => void
}

export const wishListContext = React.createContext<WishListContextType>({
  wishList: [],
  addToWishList: () => {},
  removeFromWishList: () => {},
})

export const WishListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishList, setWishList] = React.useState<Job[]>([])

  const addToWishList = (job: Job) => {
    setWishList((prevList) => [...prevList, job])
  }

  const removeFromWishList = (jobId: number) => {
    setWishList((prevList) => prevList.filter((j: any) => j.id !== jobId))
  }

  return (
    <wishListContext.Provider value={{ wishList, addToWishList, removeFromWishList }}>
      {children}
    </wishListContext.Provider>
  )
}

export default WishListProvider
