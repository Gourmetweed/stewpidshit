/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Stewpidly Good'

interface BookingNotificationProps {
  name?: string
  email?: string
  phone?: string
  details?: string
}

const BookingNotificationEmail = ({
  name = '—',
  email = '—',
  phone = '—',
  details = '—',
}: BookingNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New booking request from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          NEW BOOKING <span style={{ color: '#F5C518' }}>REQUEST</span>
        </Heading>
        <Text style={text}>Someone wants to book {SITE_NAME}. Details below.</Text>
        <Hr style={hr} />
        <Section>
          <Text style={label}>NAME</Text>
          <Text style={value}>{name}</Text>
          <Text style={label}>EMAIL</Text>
          <Text style={value}>{email}</Text>
          <Text style={label}>PHONE</Text>
          <Text style={value}>{phone}</Text>
          <Text style={label}>EVENT DETAILS</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{details}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>Sent from stewpidlygood.no</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: BookingNotificationEmail,
  subject: (d: Record<string, any>) =>
    `New booking request — ${d?.name ?? 'Unknown'}`,
  displayName: 'Booking notification (to you)',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+47 999 88 777',
    details: 'Wedding for 80 people in Oslo, August 15th.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#2D3130', margin: '0 0 16px', letterSpacing: '0.02em' }
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.6', margin: '0 0 16px' }
const label = { fontSize: '11px', color: '#999', letterSpacing: '0.2em', margin: '12px 0 4px', fontWeight: 'bold' as const }
const value = { fontSize: '15px', color: '#2D3130', margin: '0 0 8px', lineHeight: '1.5' }
const hr = { borderColor: '#eee', margin: '20px 0' }
const footer = { fontSize: '12px', color: '#999', margin: '20px 0 0' }
