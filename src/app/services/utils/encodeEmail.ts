export  const encodeEmail = (email: string | any): string | any => {
  const [localPart, domain] = email.split('@');
  const maskedLocalPart = localPart.length > 2 
    ? localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1]
    : localPart[0] + '*';

  const domainParts = domain.split('.');
  const maskedDomain = domainParts[0].length > 2 
    ? domainParts[0][0] + '*'.repeat(domainParts[0].length - 2) + domainParts[0][domainParts[0].length - 1]
    : domainParts[0][0] + '*';

  return `${maskedLocalPart}@${maskedDomain}.${domainParts[1]}`;
};