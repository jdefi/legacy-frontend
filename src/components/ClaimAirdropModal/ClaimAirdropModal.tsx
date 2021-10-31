import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'

const ClaimAirdropModal: React.FC<ModalProps> = ({ onDismiss }) => {

    return (
        <Modal>
            <ModalTitle text="Airdrops" />
            <ModalContent>
                <Spacer />
                <Button
                    href={`https://etherscan.io/`}
                    text="Claim Airdrop"
                    variant="secondary"
                />
            </ModalContent>
            <ModalActions>
                <Button onClick={onDismiss} text="Cancel" />
            </ModalActions>
        </Modal>
    )
}

export default ClaimAirdropModal;