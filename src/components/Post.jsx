export default function Post(){
    return(
<div className="max-w-xs bg-grey shadow-lg rounded-lg overflow-hidden mx-auto mt-8">
    <div className=" h-64 bg-zinc-400 flex items-center justify-center">
        <h1 className="text-4xl">600x400</h1>
    </div>
    <div className="p-4 bg-zinc-50">
        <h2 className="text-xl font-semibold text-gray-800">Titolo del post</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis tempora adipisci voluptas ullam voluptatum exercitationem praesentium sunt ab nihil. Atque accusamus provident dolorum eligendi sed deserunt magni id neque.</p>
        <div className="mt-4">
        <a href="#" className="bg-yellow-500 text-white py-2 px-4 uppercase ">LEGGI DI PIù</a>
        </div>
    </div>
</div>


    )
}