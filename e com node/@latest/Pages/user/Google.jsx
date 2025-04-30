const GoogleMap = () => {
    return (
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.7195902455755!2d77.29250057415817!3d28.39753619471573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd9f368edb37%3A0x24857704cdee0a76!2sDreamer%20Infotech%20-%20Data%20Analyst%20Course%2C%20MERN%20Stack%2C%20and%20Digital%20Marketing%20Course%20in%20Faridabad!5e0!3m2!1sen!2sin!4v1741148543291!5m2!1sen!2sin"
          width="80%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };
  
  export default GoogleMap;
  