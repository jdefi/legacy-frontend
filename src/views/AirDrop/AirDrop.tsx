import React, {useCallback, useEffect, useState} from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'

import { useWallet } from 'use-wallet'

import Card from '../../components/Card'
import Page from '../../components/Page'
import Label from '../../components/Label';
import Button from '../../components/Button'
import Spacer from '../../components/Spacer'
import SushiIcon from '../../components/SushiIcon'
import PageHeader from '../../components/PageHeader'
import CardContent from '../../components/CardContent'
import Input, { InputProps } from '../../components/Input';
import ClaimAirdropModal from '../../components/ClaimAirdropModal';
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

const AirDrop: React.FC = () => {
    const { account } = useWallet()
    const [value, setValue] = useState('')
    const [openClaimAirDropModal] = useModal(<ClaimAirdropModal />)
    const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const fetchAddress = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value)
        },
        [setValue],
    )

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
                                            <Input
                                                placeholder="Enter valid Address"
                                                value={value}
                                                onChange={fetchAddress} />
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
  color: ${(props) => props.theme.color.brown[400]};
  border-top: solid 1px ${(props) => props.theme.color.brown[300]};
`

const FooterValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

export default AirDrop
