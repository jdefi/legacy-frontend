import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import Button from '../Button'
import Spacer from '../Spacer'
import ModalTitle from '../ModalTitle'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import Modal, { ModalProps } from '../Modal'

const ModalClaim: React.FC<ModalProps> = ({ onDismiss }) => {

    return (
        <Modal>
            <ModalTitle text="Claims" />
            <ModalContent>
                <Spacer />
                <Button
                    href={`https://etherscan.io/`}
                    text="Check again"
                    variant="secondary"
                />
            </ModalContent>
            <ModalActions>
                <Button onClick={onDismiss} text="Cancel" />
            </ModalActions>
        </Modal>
    )
}

export default ModalClaim;