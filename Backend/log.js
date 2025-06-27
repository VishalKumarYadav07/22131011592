import fetch from 'node-fetch';

const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJ2aXNoYWwuMjJzY3NlMTAxMTYyMkBnYWxnb3RpYXN1bml2ZXJzaXR5LmVkdS5pbiIsImV4cCI6MTc1MTAxNjM5MiwiaWF0IjoxNzUxMDE1NDkyLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMDc1NmY2ZWYtOGI4ZS00MjQ5LTk2ZDMtMThlMDRjYmI2YzQzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoidmlzaGFsIGt1bWFyIHlhZGF2Iiwic3ViIjoiYjUyMDdjZjMtZjVlNy00OWQwLWJjY2UtZWY0ZTBkMzY5MDdhIn0sImVtYWlsIjoidmlzaGFsLjIyc2NzZTEwMTE2MjJAZ2FsZ290aWFzdW5pdmVyc2l0eS5lZHUuaW4iLCJuYW1lIjoidmlzaGFsIGt1bWFyIHlhZGF2Iiwicm9sbE5vIjoiMjIxMzEwMTE1OTIiLCJhY2Nlc3NDb2RlIjoiTXVhZ3ZxIiwiY2xpZW50SUQiOiJiNTIwN2NmMy1mNWU3LTQ5ZDAtYmNjZS1lZjRlMGQzNjkwN2EiLCJjbGllbnRTZWNyZXQiOiJha3FGZkFkUHZWWERUQUhSIn0.303V4thxYe-paKyJYBEAxnYThKik7Thh7g3zD0l7GwM';

async function Log(stack, level, pkg, message) {
  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BEARER_TOKEN}`
      },
      body: JSON.stringify({
        stack: stack.toLowerCase(),
        level: level.toLowerCase(),
        package: pkg.toLowerCase(),
        message: message
      })
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Log Success:', data);
    } else {
      console.error('❌ Log Failed:', data);
    }

  } catch (error) {
    console.error('❌ Network Error:', error.message);
  }
}

Log('backend', 'error', 'handler', 'received string, expected bool');
