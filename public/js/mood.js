function togglesize()
{
    var size;
    if (document.getElementById("small").checked)
    {
        size = "15%";
    }
    else if (document.getElementById("medium").checked)
    {
        size = "17%";
    }
    else
    {
        size = "20%";
    }

    document.getElementsByClassName("mood").style.height = size;
    document.getElementsByClassName("mood").style.width = size;
    // document.getElementsByClassName("mood").style.height = size;
    // document.getElementsByClassName("mood").style.width = size;
    }