import React, { useEffect } from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'

import { useParams } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'

import Card from '../../components/Card'
import Page from '../../components/Page'
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import SushiIcon from '../../components/SushiIcon'
import PageHeader from '../../components/PageHeader'
import CardContent from '../../components/CardContent'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import useSushi from '../../hooks/useSushi'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import { getContract } from '../../utils/erc20'
import { getMasterChefContract } from '../../sushi/utils'

import Harvest from './components/Harvest'
import Stake from './components/Stake'
import Label from "../../components/Label";
import ClaimAirdropModal from "../../components/ClaimAirdropModal";

const Farm: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  const [openClaimAirDropModal] = useModal(<ClaimAirdropModal />)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sushi = useSushi()
  const { ethereum } = useWallet()

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
            icon={<img src={chef} alt="chef logo" height="120" />}
            title="Stake Sushi Tokens & Earn Fees"
            subtitle="0.05% of all SushiSwap trades are rewarded to SUSHI stakers"
          />

          {/* <FarmCards /> */}
          {/*<div>TBD</div>*/}

          <StyledCardWrapper>
            <Card>
              <CardContent>
                <StyledClaims>
                  <StyledClaim>
                    <SushiIcon />
                    <Spacer />
                    <div style={{ flex: 1 }}>
                      <Label text="Claim your airdrop" />
                      <Button
                          onClick={openClaimAirDropModal}
                          size="sm"
                          text="🔪 Claim airdrop" />
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

const StyledValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 36px;
  font-weight: 700;
`

const Footer = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.grey[400]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`

const FooterValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

// const StyledFarm = styled.div`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `
//
// const StyledCardsWrapper = styled.div`
//   display: flex;
//   width: 600px;
//   @media (max-width: 768px) {
//     width: 100%;
//     flex-flow: column nowrap;
//     align-items: center;
//   }
// `
//
// const StyledCardWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   @media (max-width: 768px) {
//     width: 80%;
//   }
// `
//
// const StyledInfo = styled.h3`
//   color: ${(props) => props.theme.color.grey[400]};
//   font-size: 16px;
//   font-weight: 400;
//   margin: 0;
//   padding: 0;
//   text-align: center;
// `

export default Farm
