
function handleFileSelect(evt) {
var files = evt.target.files; // FileList object
// files is a FileList of File objects. List some properties.
var output = [];
for (var i = 0, f; f = files[i]; i++) {
output.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ',
f.size, ' bytes, last modified: ',
f.lastModifiedDate.toLocaleDateString(), '</li>');
}
document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}
/*
object.OpenTextFile(filename[, iomode[, create[, format]]])
����
object
��ѡ�object ӦΪ FileSystemObject �����ơ�
filename
��ѡ�ָ��Ҫ���ļ����ַ������ʽ��
iomode
��ѡ���������������֮һ��ForReading �� ForWriting �� ForAppending ��
create
��ѡ�Boolean ֵ��ָ����ָ���� filename ������ʱ�Ƿ񴴽����ļ�������������ļ���ֵΪ True �������������Ϊ False ��������ԣ��򲻴������ļ���
format
��ѡ�ʹ����ֵ̬�е�һ����ָ�����ļ��ĸ�ʽ��������ԣ���ô�ļ����� ASCII ��ʽ�򿪡�
����
iomode �������������������е���һ�֣�
���� ֵ ����
ForReading 1 ��ֻ����ʽ���ļ�������д����ļ���
ForWriting 2 ��д��ʽ���ļ�
ForAppending 8 ���ļ������ļ�ĩβ��ʼд��

format �������������������е���һ�֣�
ֵ ����
TristateTrue �� Unicode ��ʽ���ļ���
TristateFalse �� ASCII ��ʽ���ļ���
TristateUseDefault ʹ��ϵͳĬ��ֵ���ļ���
*/

//���ļ�
function readFile(filename){
alert("reading");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var f = fso.OpenTextFile(filename,1);
var s = "";
while (!f.AtEndOfStream)
s += f.ReadLine()+"\n";
f.Close();
alert("reading ok");
return s;
}

//д�ļ�
function writeFile(filename,filecontent){
alert("writing...");
var fso, f, s ;
fso = new ActiveXObject("Scripting.FileSystemObject");
f = fso.OpenTextFile(filename,8,true);
f.WriteLine(filecontent);
f.Close();
alert("write ok");
}