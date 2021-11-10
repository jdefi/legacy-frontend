import React, { useState } from 'react'
import styled from 'styled-components'

import Card from '../../../components/Card'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import Button from '../../../components/Button'
import CardIcon from '../../../components/CardIcon'
import CardContent from '../../../components/CardContent'

import useReward from '../../../hooks/useReward'
import useEarnings from '../../../hooks/useEarnings'
import { getBalanceNumber } from '../../../utils/formatBalance'

interface HarvestProps {
    pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
    const earnings = useEarnings(pid)
    const [pendingTx, setPendingTx] = useState(false)
    const { onReward } = useReward(pid)

    return (
        <Card>
            <CardContent>
                <StyledCardContentInner>
                    <StyledCardHeader>
                        <CardIcon><span role="img" aria-label="sushi">🍣</span></CardIcon>
                        <Value value={getBalanceNumber(earnings)} />
                        <Label text="SUSHI Earned" />
                    </StyledCardHeader>
                    <StyledCardActions>
                        <Button
                            disabled={!earnings.toNumber() || pendingTx}
                            text={pendingTx ? 'Collecting SUSHI' : 'Harvest'}
                            onClick={async () => {
                                setPendingTx(true)
                                await onReward()
                                setPendingTx(false)
                            }}
                        />
                    </StyledCardActions>
                </StyledCardContentInner>
            </CardContent>
        </Card>
    )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
