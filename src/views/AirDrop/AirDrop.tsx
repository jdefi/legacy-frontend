import React, { useEffect } from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'

import { provider } from 'web3-core'
import { useWallet } from 'use-wallet'
import { useParams } from 'react-router-dom'

import Card from '../../components/Card'
import Page from '../../components/Page'
import Label from '../../components/Label';
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import SushiIcon from '../../components/SushiIcon'
import PageHeader from '../../components/PageHeader'
import CardContent from '../../components/CardContent'
import ClaimAirdropModal from '../../components/ClaimAirdropModal';
import WalletProviderModal from '../../components/WalletProviderModal'

import useFarm from '../../hooks/useFarm'
import useModal from '../../hooks/useModal'

import useSushi from '../../hooks/useSushi'
import useRedeem from '../../hooks/useRedeem'
import { getContract } from '../../utils/erc20'
import { getMasterChefContract } from '../../sushi/utils'

const AirDrop: React.FC = () => {
    const { account } = useWallet()
    const [openClaimAirDropModal] = useModal(<ClaimAirdropModal />)
    const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

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
                        title="Claim Sushi Drops & Earn Fees"
                        subtitle="0.05% of all SushiSwap trades are rewarded to SUSHI stakers"
                    />

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

export default AirDrop