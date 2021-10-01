export const image = (src: string, alt: string = ''): React.ReactNode => {
  return  <div style={{height: '100%', width: 'auto', borderRadius: '50%'}}>
            <img style={{borderRadius: '50%'}} width='100%' height='100%' src={src} alt={alt}/>
          </div>
};