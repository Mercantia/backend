module.exports = ({ env }) => ({
  
 'website-builder': {
    enabled: true,
    config: {
      url: 'http://localhost:1337/trigger',
      trigger: {
        type: 'manual',
      },
    }
  },

});