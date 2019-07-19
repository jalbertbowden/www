import os
import urllib.request
import urllib.parse

SLACK_API_ENDPOINT = 'https://slack.com/api/users.admin.invite'

HEADERS = {
    'Access-Control-Allow-Origin': os.environ['ALLOWED_ORIGIN'],
    'Access-Control-Allow-Credentials': 'true'
}

def lambda_handler(event, context):
    # quick, gross, and dirty querystring splitting
    params = {k[0]: k[1] for k in [kv.split('=') for kv in event['body'].split('&')]}

    if 'email' not in params:
        return {
            'statusCode': 400,
            'body': 'Must provide an email parameter',
            'headers': HEADERS
        }

    # build our slack api request parameters
    slack_request_data = urllib.parse.urlencode({
        'email': params['email'],
        'channels': os.environ['SLACK_CHANNEL'],
        'token': os.environ['SLACK_API_TOKEN']
    }).encode('utf-8')

    slack_request = urllib.request.Request(SLACK_API_ENDPOINT, data=slack_request_data, method='POST')

    with urllib.request.urlopen(slack_request) as slack_response:
        # blindly proxy back the slack api response
        return {
            'statusCode': slack_response.status,
            'body': slack_response.read().decode('utf-8'),
            'headers': HEADERS
        }
