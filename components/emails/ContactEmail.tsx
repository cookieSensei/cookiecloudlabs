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
          <Heading
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#0f172a",
              marginBottom: "8px",
            }}
          >
            🍪 CookieSensei
          </Heading>

          <Text
            style={{
              color: "#475569",
              fontSize: "16px",
              marginTop: "0",
              marginBottom: "24px",
            }}
          >
            You have received a new contact form submission.
          </Text>

          <Hr
            style={{
              borderColor: "#e2e8f0",
              margin: "32px 0",
            }}
          />

          <Hr />

          <Section>
            <Heading
              as="h2"
              style={{
                fontSize: "18px",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Contact Information
            </Heading>

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

            <Hr
              style={{
                borderColor: "#e2e8f0",
                margin: "32px 0",
              }}
            />

            <Heading
              as="h2"
              style={{
                fontSize: "18px",
                color: "#1e293b",
                marginBottom: "20px",
              }}
            >
              Message
            </Heading>

            <Text
              style={{
                whiteSpace: "pre-wrap",
                lineHeight: "1.7",
                color: "#334155",
              }}
            >
              {message}
            </Text>

          </Section>

          <Hr
            style={{
              borderColor: "#e2e8f0",
              margin: "32px 0",
            }}
          />

          <Text
            style={{
              fontSize: "13px",
              color: "#94a3b8",
              textAlign: "center",
            }}
          >
            This message was sent from the CookieSensei contact form.
          </Text>

        </Container>
      </Body>
    </Html>
  );
}