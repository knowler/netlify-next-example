export const Button = props => (
  <button
    fontSize={2}
    fontWeight='500'
    px={3}
    py={2}
    bg='green'
    color='mirage'
    border='0'
    borderRadius='0.25rem'
    transitionDuration='0.2s'
    css={{
      ':hover': {
        color: 'white',
        backgroundColor: '#4960d2',
      },
      ':active': {
        transform: 'translateY(0.1rem)',
      },
    }}
    {...props}
  />
)
