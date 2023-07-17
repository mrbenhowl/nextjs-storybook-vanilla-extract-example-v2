export default function Layout ({
  children,
  addressDetails,
  contactDetails,
  taxDetails // will be a page or nested layout
}) {
  return (
    <section>
      {children}
      <div style={{ display: 'flex' }}>
        {addressDetails}
        {contactDetails}
        {taxDetails}
      </div>
    </section>
  )
}
