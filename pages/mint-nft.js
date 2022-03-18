import { useState } from 'react'
import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
import { useRouter } from 'next/router'
import Web3Modal from 'web3modal'

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

import {
  marketplaceAddress, avaxCokeAddress
} from '../config'

import AvaxCoke from '../artifacts/contracts/AvaxCoke.sol/AvaxCoke.json'

export default function MintItem() {
  const [formInput, updateFormInput] = useState({ price: '', amount: '', name: '', description: '' })
  const router = useRouter()

  async function mintNFT() {
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    let contract = new ethers.Contract(avaxCokeAddress, AvaxCoke.abi, signer)

    let price = await contract.price()
    price = price.toString()

    let transaction = await contract.mint({ value: price })
    await transaction.wait()

    // router.push('/my-nfts')
  }

  return (
    <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <button onClick={mintNFT} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create NFT
        </button>
      </div>
    </div>
  )
}