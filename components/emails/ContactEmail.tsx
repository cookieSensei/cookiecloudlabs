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

const styles = {
  body: {
    backgroundColor: "#f8fafc",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    backgroundColor: "#ffffff",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "40px",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: "8px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#64748b",
    marginTop: 0,
    marginBottom: "32px",
  },

  divider: {
    borderColor: "#e2e8f0",
    margin: "28px 0",
  },

  sectionHeading: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: "20px",
  },

  label: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#64748b",
    textTransform: "uppercase" as const,
    letterSpacing: "1px",
    marginBottom: "4px",
  },

  value: {
    fontSize: "16px",
    color: "#0f172a",
    marginTop: 0,
    marginBottom: "24px",
  },

  messageBox: {
    backgroundColor: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    padding: "20px",
  },

  message: {
    fontSize: "16px",
    color: "#334155",
    lineHeight: "1.7",
    whiteSpace: "pre-wrap" as const,
    margin: 0,
  },

  footer: {
    fontSize: "13px",
    color: "#94a3b8",
    textAlign: "center" as const,
    marginTop: "32px",
  },
};

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

      <Body style={styles.body}>

        <Container style={styles.container}>

          <Heading style={styles.title}>
            🍪 CookieSensei
          </Heading>

          <Text style={styles.subtitle}>
            You have received a new contact form submission.
          </Text>

          <Hr style={styles.divider} />

          <Section>
            <Heading as="h2" style={styles.sectionHeading}>
              Contact Information
            </Heading>

            <Text style={styles.label}>
              Name
            </Text>

            <Text style={styles.value}>
              {name}
            </Text>


            <Text style={styles.label}>
              Email
            </Text>

            <Text style={styles.value}>
              {email}
            </Text>

            <Text style={styles.label}>
              Topic
            </Text>

            <Text style={styles.value}>
              {topic}
            </Text>



            <Hr style={styles.divider} />

            <Heading as="h2" style={styles.sectionHeading}>
              Message
            </Heading>

            <Section style={styles.messageBox}>
              <Text style={styles.message}>
                {message}
              </Text>
            </Section>

          </Section>

          <Hr style={styles.divider} />

          <Text style={styles.footer}>
            This message was sent from the CookieSensei contact form.
          </Text>

        </Container>
      </Body>
    </Html>
  );
}