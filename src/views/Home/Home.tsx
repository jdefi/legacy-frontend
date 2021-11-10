import React from 'react'
import styled from 'styled-components'

import chef from '../../assets/img/chef.png'

import Page from '../../components/Page'
import Button from '../../components/Button'
import Balances from './components/Balances'
import Spacer from '../../components/Spacer'
import Container from '../../components/Container'
import PageHeader from '../../components/PageHeader'

const Home: React.FC = () => {
    return (
        <Page>
            <PageHeader
                icon={<img alt="MasterChef logo" src={chef} height={120} />}
                title="MasterChef is Ready"
                subtitle="Stake Uniswap LP tokens to claim your very own yummy SUSHI!"
            />
            <Container>
                <Balances />
            </Container>
            <Spacer size="lg" />
            <About />
            <Spacer size="lg" />
            <StyledInfo>
                <span role="img" aria-label="trophy">🏆</span><b>Pro Tip</b>:
                SUSHI-ETH UNI-V2 LP token pool yields TWICE more token rewards per block.
            </StyledInfo>
            <Spacer size="lg" />
            <div
                style={{
                    margin: '0 auto',
                }}
            >
                <Button text="🔪 See the Menu" to="/farms" variant="secondary" />
            </div>
        </Page>
    )
}

const About: React.FC = () => {
    return (
        <StyledAboutWrap>
            <StyledAboutLeft>
                Content about here
            </StyledAboutLeft>
            <StyledAboutRight>
                Icons here
            </StyledAboutRight>
        </StyledAboutWrap>
    )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.darkOrange[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
  > b {
    color: ${(props) => props.theme.color.darkOrange[600]};
  }
`

const StyledAboutWrap = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-box-align: center;
`

const StyledAboutLeft = styled.div`
  display: flex;
  width: 100%;
  max-width: 619px;
  min-width: 350px;
  margin-right: 60px;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  -webkit-box-flex: 1;
  -webkit-box-align: start;
  -webkit-box-orient: vertical;
`

const StyledAboutRight = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin-right: -16px;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
`

export default Home
