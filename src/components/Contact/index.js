import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInfo = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 20px;
`;

const ContactInfoTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  transition: all 0.3s ease;
  
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
    transform: translateY(-2px);
  }
`;

const ContactIcon = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
  min-width: 24px;
`;

const ContactText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        
        {/* Direct Contact Information */}
        <ContactInfo>
          <ContactInfoTitle>Reach Out to Me 📞</ContactInfoTitle>
          <ContactDetails>
            <ContactItem>
              <ContactLink href="tel:+917374953088">
                <ContactIcon>📱</ContactIcon>
                <ContactText>+91 73749 53088</ContactText>
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <ContactLink href="mailto:porwal99deepak@gmail.com">
                <ContactIcon>📧</ContactIcon>
                <ContactText>porwal99deepak@gmail.com</ContactText>
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <ContactLink href="https://www.linkedin.com/in/deepak-porwal-504489254/" target="_blank" rel="noopener noreferrer">
                <ContactIcon>💼</ContactIcon>
                <ContactText>LinkedIn Profile</ContactText>
              </ContactLink>
            </ContactItem>
            
            <ContactItem>
              <ContactLink href="https://github.com/Deepak-Porwal-code" target="_blank" rel="noopener noreferrer">
                <ContactIcon>💻</ContactIcon>
                <ContactText>GitHub Profile</ContactText>
              </ContactLink>
            </ContactItem>
          </ContactDetails>
        </ContactInfo>

        {/* Contact Form */}
        <ContactForm
          action="https://formsubmit.co/porwal99deepak@gmail.com"
          method="POST"
        >
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <ContactInput
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <ContactInput
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />
          <ContactInputMessage
            name="message"
            placeholder="Message"
            rows="4"
            required
          />
          <ContactButton type="submit">Send</ContactButton>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
