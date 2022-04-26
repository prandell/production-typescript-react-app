import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { FormEvent, useState } from 'react'
import { selectCartTotal } from '../../store/cart/cart.slice'
import { useAppSelector } from '../../store/hooks'
import { selectCurrentUser } from '../../store/user/user.slice'

import * as Styled from './payment-form.styles'

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const amount = useAppSelector(selectCartTotal)
  const currentUser = useAppSelector(selectCurrentUser)
  const [isProcessingPayment, setIsProcessingPayment] = useState(false)

  const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      console.log(
        'Stripe not initialised. Please monitor React@18 Integration here https://github.com/stripe/react-stripe-js/issues/273'
      )
      return
    }

    setIsProcessingPayment(true)

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount: amount * 100 })
    }).then((res) => res.json())

    const {
      paymentIntent: { client_secret }
    } = response

    const cardElement = elements.getElement(CardElement)
    if (cardElement) {
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser?.displayName ?? 'guest'
          }
        }
      })

      setIsProcessingPayment(false)

      if (paymentResult.error) {
        alert(paymentResult.error)
      } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
          alert('Payment Sucessful')
        }
      }
    }
    setIsProcessingPayment(false)
  }

  return (
    <Styled.PaymentFormContainer>
      <Styled.FormContainer onSubmit={paymentHandler}>
        <h2> Credit Card Payment: </h2>
        <CardElement />
        <Styled.PaymentButton
          isLoading={isProcessingPayment}
          type="submit"
          inverted={true}
        >
          Pay Now
        </Styled.PaymentButton>
      </Styled.FormContainer>
    </Styled.PaymentFormContainer>
  )
}

export default PaymentForm
