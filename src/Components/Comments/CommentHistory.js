var apiKey = 'xTmCSw.i1gaqg:Kr9DVdu6dU_QnoDO',
  realtime = new Ably.Realtime({ key: apiKey });

/* Use a channel that's in a namspace configured to persist history */
let channel = realtime.channels.get('persisted:combination');

function publishMessage() {
  let data = Math.random().toString(36).slice(-5);
  show('Publishing message with data: ' + data, 'orange');

  channel.publish('event', data, function (err) {
    if (err) {
      show('✗ Publish failed: ' + err.message, 'red');
    } else {
      show('✓ Publish successful for: ' + data, 'green');
    }
  });
}

function getHistory() {
  channel.history(function (err, resultPage) {
    let messages = resultPage.items,
      messagesData = [];

    if (err) {
      show('✗ History failed: ' + err.message, 'red');
    } else {
      show('✓ ' + messages.length + ' messages in history', 'green');
      for (var i = 0; i < messages.length; i++) {
        messagesData.push('"' + messages[i].data + '"');
      }
      if (messages.length) {
        show('✓ Message history: ' + messagesData.join(', '), 'green');
      }
    }
  });
}

function show(status, color) {
  $('#message-status').append($('<li>').text(status).css('color', color));
}

$('input#publish').on('click', publishMessage);
$('input#history').on('click', getHistory);