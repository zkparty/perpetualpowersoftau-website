# Upload files using AWS CLI

1. Install **AWS CLI** specific to your OS (
    [downloads](https://aws.amazon.com/cli/)
)

2. Set up user access running in the terminal:
`aws configure`
(
    For organizations users (e.g. Ethereum Foundation) remember to look for the configuration settings in the **Command line or programmatic access** option at login.
    Also add the `aws_session_token=<YOUR_TOKEN>` in the generated file `~/.aws/credentials` after running the configure command
)

3. Open terminal in file location directory and run:
`aws s3 cp FILE_NAME.FILE_EXTENSION s3://perpetual-powers-of-tau/FILE_CATEGORY`
(   Remember that we are currently using `challenges` or `responses` as file categories )