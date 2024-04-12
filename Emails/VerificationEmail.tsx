import {
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
interface VerificationEmailProps {
  username: string;
  otp: string;
}
export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code </title>
      </Head>
      <Preview>Here&apos;s your verification Code {otp}</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hello {username} </Heading>
        </Row>
        <Row>
          <Text>
            Thank You For registring. Please Use the following Verification Code
            to complete your registration
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>If you did not request this you can safely ignore this email</Row>
      </Section>
    </Html>
  );
}
