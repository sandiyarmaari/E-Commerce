function search()
{
    var input,filter,boxes,text,i;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    boxes = document.getElementsByClassName('top-pick-boxes-box');

    for(i=0;i<boxes.length;i++)
    {
        text = boxes[i].getElementsByTagName('p')[0];

        if(text)
        {
            if(text.innerHTML.toUpperCase().indexOf(filter) > -1)
            {
                boxes[i].style.display = '';
            }
            else
            {
                boxes[i].style.display = 'none';
            }
        }
    }
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
        search();
    }
}