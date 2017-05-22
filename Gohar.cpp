#include <iostream>
#include <string>
using namespace std;

struct students{
    string name;
    string surname;
    int mark;
    friend std::ostream & operator << (std::ostream &, students *);
};
std::ostream & operator << (std::ostream & c, students * p){
    for(int i = 0; i < 5; i++)
    {
        c << (*(p+i)).name <<" "<< (*(p+i)).surname <<" "<< (*(p+i)).mark<<'\n';
    }
    return c;
}
int main()
{
    students st[5] = {
        {"Edgar", "Xachatryan", 12},
        {"Poxos", "Poxosyan", 45},
        {"Gohar", "Xachatryan", 1},
        {"Gohar", "Xachatryan", 78},
        {"Gohar", "Xachatryan", 2}
    };
    students * s = st;

    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4-i; j++)
        {
                if((*(st + j)).mark > (*(st+j+1)).mark)
                {
                    students temp = *(st+j);
                    *(st+j) = *(st+j+1);
                    *(st+j+1) = temp;
                }
        }
    }


    std::cout<<st;
}
