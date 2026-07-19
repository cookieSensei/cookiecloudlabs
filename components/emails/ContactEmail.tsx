import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  topic,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />

      <Preview>
        New CookieSensei contact form submission
      </Preview>

      <Body
        style={{
          backgroundColor: "#f8fafc",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            maxWidth: "600px",
            margin: "40px auto",
            padding: "40px",
            borderRadius: "12px",
          }}
        >
          <Heading>
            New Contact Form Submission
          </Heading>

          <Hr />

          <Section>

            <Text>
              <strong>Name</strong>
            </Text>

            <Text>{name}</Text>

            <Text>
              <strong>Email</strong>
            </Text>

            <Text>{email}</Text>

            <Text>
              <strong>Topic</strong>
            </Text>

            <Text>{topic}</Text>

            <Hr />

            <Text>
              <strong>Message</strong>
            </Text>

            <Text>{message}</Text>

          </Section>

        </Container>
      </Body>
    </Html>
  );
}