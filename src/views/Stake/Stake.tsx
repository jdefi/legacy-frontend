import React, { useEffect, useState, useCallback } from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'

import { provider } from 'web3-core'
import { useWallet } from 'use-wallet'
import { useParams } from 'react-router-dom'

import Stake from './components/Stake'
import Card from '../../components/Card'
import Page from '../../components/Page'
import Label from '../../components/Label'
import Harvest from './components/Harvest'
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import SushiIcon from '../../components/SushiIcon'
import PageHeader from '../../components/PageHeader'
import CardContent from '../../components/CardContent'
import ModalClaim from '../../components/ModalClaim'
import Input, { InputProps } from '../../components/Input'
import WalletProviderModal from '../../components/WalletProviderModal'

import useFarm from '../../hooks/useFarm'
import useSushi from '../../hooks/useSushi'
import useModal from '../../hooks/useModal'
import useRedeem from '../../hooks/useRedeem'
import { getContract } from '../../utils/erc20'
import { getMasterChefContract } from '../../sushi/utils'

const StakeFarm: React.FC = () => {
  const { account } = useWallet()
  const [value, setValue] = useState('')
  const [openClaimModal] = useModal(<ModalClaim />)
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sushi = useSushi()
  const { ethereum } = useWallet()

  const fetchAddress = useCallback(
      (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
      },
      [setValue],
  )

  // const lpContract = useMemo(() => {
  //   return getContract(ethereum as provider, lpTokenAddress)
  // }, [ethereum, lpTokenAddress])

  // const { onRedeem } = useRedeem(getMasterChefContract(sushi))

  // const lpTokenName = useMemo(() => {
  //   return lpToken.toUpperCase()
  // }, [lpToken])

  // const earnTokenName = useMemo(() => {
  //   return earnToken.toUpperCase()
  // }, [earnToken])

  return (
    <Page>
      {!!account ? (
        <>
          <PageHeader
            icon={<img alt="MasterChef logo" src={chef} height="120" />}
            title="Stake Sushi Tokens & Earn Fees"
            subtitle="0.05% of all SushiSwap trades are rewarded to SUSHI stakers"
          />
          {/* <FarmCards /> */}
          <div>TBD</div>

          <StyledCardWrapper>
            <Card>
              <CardContent>
                <StyledClaims>
                  <StyledClaim>
                    <SushiIcon />
                    <Spacer />
                    <div style={{ flex: 1 }}>
                      <Label text="Claim" />
                      <Input
                          placeholder="Enter valid Address"
                          value={value}
                          onChange={fetchAddress} />
                      <Spacer />
                      <Button
                          onClick={openClaimModal}
                          size="sm"
                          text="🔪 Claim" />
                    </div>
                  </StyledClaim>
                </StyledClaims>
              </CardContent>
              <Footer>
                New airdrops
                <FooterValue>Every 2 days</FooterValue>
              </Footer>
            </Card>
          </StyledCardWrapper>
        </>
      ) : (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={onPresentWalletProviderModal}
            text="🔓 Unlock Wallet"
          />
        </div>
      )}
    </Page>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

// const StyledCardWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   @media (max-width: 768px) {
//     width: 80%;
//   }
// `

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.darkOrange[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

const StyledCardWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledClaims = styled.div`
  display: flex;
`

const StyledClaim = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const Footer = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.darkOrange[400]};
  border-top: solid 1px ${(props) => props.theme.color.darkOrange[300]};
`

const FooterValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

export default StakeFarm
