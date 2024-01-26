# Azure Function Health Check For Teams Bot

This script represents an Azure Function designed to run on a schedule, executing every 10 minutes. Its primary purpose is to perform a health status check by sending a request to the Azure Bot Service.

## Functionality

- The function sends a health status check request to the Azure Bot Service.
- The Azure Bot Service runs on an Azure Function Consumption Plan.
- Due to the consumption plan, the bot service may experience a delay in response during the cold start phase after a period of inactivity.
- The function ensures the bot is always active by periodically sending health requests using the Bot channel's Directline 3.0 API.
- This approach is more cost-effective compared to using an Azure Premium Function Plan, which can be expensive as it runs on a virtual machine (VM). The consumption plan is practically free for low to moderate usage.

## Usage

1. Clone the repository.
2. Configure the necessary settings in the function, such as the Azure Bot Service endpoint.
3. Deploy the Azure Function to your Azure subscription.
4. The function will run automatically every 10 minutes, sending health requests to keep the bot active.

## Cost Considerations

- The Azure Function Consumption Plan is a cost-effective choice for scenarios with intermittent or low usage.

## Notes

- Adjust the schedule or modify the function according to your specific requirements.
