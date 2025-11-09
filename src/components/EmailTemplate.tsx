import { Html, Head, Body, Container, Section, Text, Heading } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate = ({ name, email, message }: EmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }}>
      <Container style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <Section style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <Heading style={{ color: '#0F4C75', fontSize: '24px', marginBottom: '20px' }}>
            New Contact Message
          </Heading>
          
          <Section style={{ marginBottom: '20px' }}>
            <Text style={{ fontWeight: 'bold', margin: '5px 0' }}>Name:</Text>
            <Text style={{ margin: '5px 0' }}>{name}</Text>
          </Section>
          
          <Section style={{ marginBottom: '20px' }}>
            <Text style={{ fontWeight: 'bold', margin: '5px 0' }}>Email:</Text>
            <Text style={{ margin: '5px 0' }}>{email}</Text>
          </Section>
          
          <Section style={{ marginBottom: '20px' }}>
            <Text style={{ fontWeight: 'bold', margin: '5px 0' }}>Message:</Text>
            <Text style={{ margin: '5px 0', whiteSpace: 'pre-wrap' }}>{message}</Text>
          </Section>
        </Section>
        
        <Text style={{ fontSize: '12px', color: '#666666', marginTop: '20px' }}>
          This message was sent from the KYNEX.dev contact form.
        </Text>
      </Container>
    </Body>
  </Html>
);