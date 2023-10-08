var a = [90,6,56,56,14,20,30,30,78,65,91,87,36,20,25,34,12,5,5,18,50,72,100];

// Randomize Array Function
function randomizeArray(a)
{
    for(var i=a.length-1;i>0;i--)
    {
        var j = Math.floor(Math.random()*(i+1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

// Insertion Sort Function
function insertionSort(a)
{
    var i, j, k;
    for(i=1;i<a.length;i++)
    {
        k = a[i];
        j=i-1;
        while(j>=0 && a[j]>k)
        {
            a[j+1] = a[j];
            j = j-1;
        }
        a[j+1] = k;
    }
    return a;
}

// Selection Sort Function
function selectionSort(a)
{
    var i, j, min, temp;
    for(i=0;i<a.length-1;i++)
    {
        min = i;
        for(j=i+1;j<a.length;j++)
        {
            if(a[j]<a[min])
            {
                min = j;
            }
        }
        temp = a[min];
        a[min] = a[i];
        a[i] = temp;
    }
    return a;
}

// Bubble Sort Function 
function bubbleSort(a)
{
    for(var i=0;i<a.length;i++)
    {
        for(var j=0;j<(a.length-i-1);j++)
        {
            if(a[j]>a[j+1])
            {
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    return a;
}

// Quick Sort Function
function def(a,min,max)
{
    let pivot = a[max];
    let i = min-1;
    for(let j=min; j<=max-1; j++)
    {
        if(a[j]<pivot)
        {
            i++;
            [a[i], a[j]] = [a[j], a[i]];
        }
    }
    [a[i+1], a[max]] = [a[max], a[i+1]];
    return i+1;
}
function quickSort(a,min,max)
{
    if(min<max)
    {
        let index = def(a, min, max);
        quickSort(a,min,index-1);
        quickSort(a,index+1,max);
    }
    return a;
} 

// Shell Sort Function
function shellSort(a)
{
    var n = a.length;
    for(var i=Math.floor(n/2); i>0; i=Math.floor(i/2))
    {
        for(var j=i; j<n; j+=1)
        {
            var temp = a[j];
            for(var k=j; k>=i && a[k-i] > temp; k-= i)
            {
                a[k] = a[k-i];
            }
            a[k] = temp;
        }
    }
    return a;
}

// Change Size Function
function changeSize(a)
{
    for(var i=0; i<a.length; i++)
    {
        a[i] = a[i] - 8;
    }
    return a;
}

var container = document.getElementById("container").getContext("2d");
var mychart;

// Calling randomizeArray() function
document.getElementById("randomizeArray").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: randomizeArray(a), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});

// Calling insertionSort() function
document.getElementById("insertionSort").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: insertionSort(a), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});

// Calling selectionSort() function
document.getElementById("selectionSort").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: selectionSort(a), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});

// Calling bubbleSort() function
document.getElementById("bubbleSort").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: bubbleSort(a), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});

// Calling quickSort() function
document.getElementById("quickSort").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: quickSort(a,0,a.length-1), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});

// Calling shellSort() function
document.getElementById("shellSort").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: shellSort(a), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});

// Calling changeSize() function
document.getElementById("changeSize").addEventListener("click", function()
{
    mychart = new Chart(container, {
        type: 'bar',
        data: {
            labels: a, 
            datasets: [{ label: "Data", data: changeSize(a), }], 
        }, 
        options: {
            maintainAspectRatio: false,
            plugins: { legend: { display: false,} },
            scales:{
                x: { grid: { display:false,}
                },
                y: { grid: { display:false, },
                     ticks:{ display: false, },
                },
            },
        },
    });
});