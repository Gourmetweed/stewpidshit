/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Stewpidly Good'

interface BookingConfirmationProps {
  name?: string
}

const BookingConfirmationEmail = ({ name }: BookingConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>We got your booking request — {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          THANKS{name ? `, ${name.toUpperCase()}` : ''}.
        </Heading>
        <Heading style={h2}>
          STEWPIDLY <span style={{ color: '#F5C518' }}>GOOD</span> GOT YOUR REQUEST.
        </Heading>
        <Text style={text}>
          We received your booking request and will be in touch shortly to talk through
          the details — menus, logistics, the whole pot.
        </Text>
        <Text style={text}>
          In the meantime, follow us on Instagram{' '}
          <a href="https://instagram.com/stewpidly.good" style={link}>
            @stewpidly.good
          </a>{' '}
          for behind-the-scenes from the kitchen.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>MAD BOWLS · HAPPY SOULS</Text>
        <Text style={footer}>hello@stewpidlygood.no</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: BookingConfirmationEmail,
  subject: 'We got your booking request — Stewpidly Good',
  displayName: 'Booking confirmation (to submitter)',
  previewData: { name: 'Jane' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }
const container = { padding: '40px 28px', maxWidth: '560px' }
const h1 = { fontSize: '28px', fontWeight: 'bold', color: '#2D3130', margin: '0 0 8px', letterSpacing: '0.02em' }
const h2 = { fontSize: '20px', fontWeight: 'bold', color: '#2D3130', margin: '0 0 24px', letterSpacing: '0.02em' }
const text = { fontSize: '15px', color: '#55575d', lineHeight: '1.7', margin: '0 0 18px' }
const link = { color: '#F5C518', textDecoration: 'none', fontWeight: 'bold' as const }
const hr = { borderColor: '#eee', margin: '32px 0 20px' }
const footer = { fontSize: '12px', color: '#999', margin: '0 0 4px', letterSpacing: '0.15em' }
