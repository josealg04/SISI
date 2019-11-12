using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SISI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EstudianteItems",
                columns: table => new
                {
                    Cedula = table.Column<string>(maxLength: 12, nullable: false),
                    TipoDocumento = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: false),
                    Genero = table.Column<string>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(maxLength: 15, nullable: false),
                    Email_Personal = table.Column<string>(nullable: false),
                    FechaIngreso = table.Column<DateTime>(nullable: false),
                    Facultad = table.Column<string>(nullable: false),
                    Programa = table.Column<string>(nullable: false),
                    Semestre = table.Column<string>(nullable: false),
                    Email_Institucional = table.Column<string>(nullable: false),
                    Cvlac = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EstudianteItems", x => x.Cedula);
                });

            migrationBuilder.CreateTable(
                name: "TutorItems",
                columns: table => new
                {
                    Cedula = table.Column<string>(maxLength: 12, nullable: false),
                    TipoDocumento = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: false),
                    Genero = table.Column<string>(nullable: false),
                    FechaNacimiento = table.Column<DateTime>(nullable: false),
                    Direccion = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(maxLength: 15, nullable: false),
                    Email_Personal = table.Column<string>(nullable: false),
                    FechaIngreso = table.Column<DateTime>(nullable: false),
                    Programa = table.Column<string>(nullable: false),
                    Email_Institucional = table.Column<string>(nullable: false),
                    Cvlac = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TutorItems", x => x.Cedula);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EstudianteItems");

            migrationBuilder.DropTable(
                name: "TutorItems");
        }
    }
}
