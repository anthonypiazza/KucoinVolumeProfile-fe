# Kucoin Volume Profile Front End

Live Site: https://kucoinvolumeprofilecalc.netlify.com

This application was developed to calculate the Total Volume Profile and corresponding Value Areas for Token Markets on KuCoin cryptocurrency exchange.

As of this date, the Volume Profile Pro feature on TradingView.com is only compatible with supported charts/exchanges on their site.

This inventory of charts/exchanges does not include KuCoin, creating the need for a resource such as this to provide a Premium Paid feature for free.

The application does not yet provide graphical charting, but after specifying the Base Coin and Paired Coin, as well as the time period, the Front End will submit a JSON object to a Backend Node/Express server which will make an Axios Call to the API.

The Backend manipulates the KuCoin API response object and returns the Value Area High and Low for the pair.
