import Web3 from 'web3'
import { provider } from 'web3-core'
import { AbiItem } from 'web3-utils'
import { Contract } from 'web3-eth-contract'

import ERC20ABI from '../constants/abi/ERC20.json'

export const getContract = (provider: provider, address: string) => {
  const web3 = new Web3(provider)
  return new web3.eth.Contract(
      (ERC20ABI.abi as unknown) as AbiItem,
      address,
  )
}

export const getAllowance = async (
  lpContract: Contract,
  masterChefContract: Contract,
  account: string,
): Promise<string> => {
  try {
    return await lpContract.methods
        .allowance(account, masterChefContract.options.address)
        .call()
  } catch (e) {
    return '0'
  }
}

export const getBalance = async (
  provider: provider,
  tokenAddress: string,
  userAddress: string,
): Promise<string> => {
  const lpContract = getContract(provider, tokenAddress)
  try {
    return await lpContract.methods
        .balanceOf(userAddress)
        .call()
  } catch (e) {
    return '0'
  }
}
